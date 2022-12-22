import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Banner</h2>
      <h2>Products</h2>
    </section>
  );
};

export default Home;

// Home.getLayout = (page) => {
//   return (
//     <PrimaryLayout>
//       <SidebarLayout />
//       {page}
//     </PrimaryLayout>
//   );
// };
