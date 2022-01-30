import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer XRqBKHtWISrWz0KMnOcNe2sL7s_EOs_5rzUuupHa44nfdI4iMxSDugy1kMuXZT0zkbN9hUjp_kOyJd5zWa7Xo1TcN7DR4W4QmNLiYqd3R-CJmUosuK1pBf8feML2YXYx",
  },
});
