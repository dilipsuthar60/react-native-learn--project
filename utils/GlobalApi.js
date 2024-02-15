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

const createBooking = async data => {
  const mutationQuery =
    gql`
    mutation createBooking {
      createBooking(
        data: {
          progress: booking
          businessList: { connect: { id: "` +
    data.business +
    `" } }
          date: "` +
    data.date +
    `"
          email: "` +
    data.email +
    `"
          name: "` +
    data.name +
    `"
          time: "` +
    data.time +
    `"
        }
      ) {
        id
      }
      publishManyBookings(to: PUBLISHED) {
        count
      }
    }
  `;

  const response = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsleamvs47l801wjf780xujx/master",
    mutationQuery
  );
  return response;
};

const getUserBooking = async () => {
  const query = gql`
    query getUserBooking {
      bookings(orderBy: publishedAt_DESC) {
        name
        id
        date
        email
        time
        progress
        businessList {
          id
          image {
            url
          }
          name
          address
          contant
          email
          about
        }
      }
    }
  `;

  const data = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsleamvs47l801wjf780xujx/master",
    query
  );
  return data;
};

export default {
  getSlider,
  getCategory,
  getBusinessList,
  getBusinessCategoryList,
  createBooking,
  getUserBooking
};
