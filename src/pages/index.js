
const Page = function() {
  return <div>page</div>;
};

export default Page;

export const getStaticProps = () => {
  console.log("getStaticProps", require('../../sdmx'));

  return {
    props: {}
  }
}