import { request, gql } from "graphql-request";

const getSlider = async () => {
  const sliderQuery = gql`
  query Sliders {
    sliders {
      id
      name
      image {
        url
      }
    }
  }
  `;
  const data = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsleamvs47l801wjf780xujx/master",
    sliderQuery
  );
  return data;
};
const getCatagory=async()=>{
  const categoryQuery = gql`
  query Category {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  
  `;
  const data = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsleamvs47l801wjf780xujx/master",
    categoryQuery
  );
  return data;
}
export default {getSlider,getCatagory}