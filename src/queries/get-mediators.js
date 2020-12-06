import { gql } from "@apollo/client";

const GET_MEDIATORS = gql`
  query GET_MEDIATORS {
    items {
      mediators {
        id
        status
        name
        slug
        phone
        email
        translations {
          tagline
          quote
          content
          specialties
          languages_code {
            name
            code
          }
        }

        profile_picture {
          id
          filename_download
          filename_disk
        }
        cover_photo {
          id
          filename_download
          filename_disk
        }
      }
    }
  }
`;

export default GET_MEDIATORS;
