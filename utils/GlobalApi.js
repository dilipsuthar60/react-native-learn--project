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
const getCategory = async () => {
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
};

const getBusinessList = async () => {
  const businessQuery = gql`
    query businessQuery {
      businessLists {
        id
        name
        address
        about
        email
        contant
        category {
          name
        }
        image {
          url
        }
      }
    }
  `;
  const data = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsleamvs47l801wjf780xujx/master",
    businessQuery
  );
  return data;
};

const getBusinessCategoryList = async category => {
  const businessQuery =
    gql`
    query businessQuery {
      businessLists(where: { category: { name: "` +
    category +
    `" } }) {
        id
        name
        address
        about
        email
        contant
        category {
          name
        }
        image {
          url
        }
      }
    }
  `;
  const data = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsleamvs47l801wjf780xujx/master",
    businessQuery
  );
  return data;
};

const createBooking = async () => {
  const mutationQuery = gql`
    mutation createBooking {
      createBooking(
        data: {
          progress: booking
          businessList: { connect: { id: "" } }
          date: ""
          email: ""
          name: ""
          time: ""
        }
      ) {
        id
      }
      publishManyBookings
    }
  `;

  const data = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsleamvs47l801wjf780xujx/master",
    mutationQuery
  );
  return data;
};

export default {
  getSlider,
  getCategory,
  getBusinessList,
  getBusinessCategoryList,
  createBooking
};
