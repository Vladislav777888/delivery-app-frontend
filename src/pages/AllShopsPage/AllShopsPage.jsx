import { AsideBar } from 'components/AsideBar';
import { Box } from './AllShopsPage.styled';
import { useEffect, useState } from 'react';
import { STATUS } from 'constants';
import {
  addProductToCart,
  getAllProducts,
  getProductsByCategory,
} from 'services';
import { useParams, useSearchParams } from 'react-router-dom';
import { AllProductsList } from 'components/AllProductsList';
import { Loader } from 'components/Loader';
import { NotFound } from 'components/NotFound';
import { PaginateComponent } from 'components/Pagination/Pagination';
import { Wrapper } from './AllShopsPage.styled';
import { toast } from 'react-toastify';

const AllShopsPage = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);
  const [totalPage, setTotalPage] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') ?? 1);

  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      const fetchAllProducts = async params => {
        setStatus(STATUS.loading);

        try {
          const data = await getAllProducts(params);

          if (data.products.length === 0) {
            throw new Error('We have nothing for this search');
          }

          setProducts(data.products);
          setTotalPage(Math.ceil(data.total / data.per_page));
          setStatus(STATUS.success);
        } catch (error) {
          console.log(error);
          setStatus(STATUS.error);
        }
      };

      fetchAllProducts({ page });
    }
  }, [category, page]);

  useEffect(() => {
    if (category) {
      const fetchProductsByCategory = async params => {
        setStatus(STATUS.loading);

        try {
          const data = await getProductsByCategory(params);

          if (data.products.length === 0) {
            throw new Error('We have nothing for this search');
          }

          setProducts(data.products);
          setTotalPage(Math.ceil(data.total / data.per_page));
          setStatus(STATUS.success);
        } catch (error) {
          console.log(error);
          setStatus(STATUS.error);
        }
      };

      fetchProductsByCategory({ page, category });
    }
  }, [category, page]);

  const handleButtonClick = async id => {
    try {
      await addProductToCart(id);
      toast.success('This product has been added to your shopping card');
    } catch ({ response }) {
      toast.error(response.data.message);
    }
  };

  return (
    <Box>
      <AsideBar />
      {status === STATUS.success && (
        <Wrapper>
          <AllProductsList products={products} onClick={handleButtonClick} />
          {totalPage > 1 && (
            <PaginateComponent
              count={totalPage}
              page={page}
              onChange={(_, num) => {
                setSearchParams({ page: num });
              }}
            />
          )}
        </Wrapper>
      )}

      {status === STATUS.error && <NotFound />}

      {(status === STATUS.loading || status === STATUS.idle) && <Loader />}
    </Box>
  );
};

export default AllShopsPage;
