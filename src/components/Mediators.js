import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Pill } from "./Utils";

const PureMediators = ({ data }) => {
  const { mediators } = data.directus.items;
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Mediatoren Netzwerk
          </h1>
          {/*<p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">*/}
          {/*  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa*/}
          {/*  libero labore natus atque, ducimus sed.*/}
          {/*</p>*/}
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {mediators.map(mediator => {
            const translated = mediator.translations[0];
            return (
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-65 w-full object-cover"
                    src={`https://mediator.stahlnecker.me/assets/${mediator.profile_picture?.id}`}
                    alt={mediator.name}
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <Link to={`/${mediator.slug}`} className="block mt-2">
                      <p className="text-xl font-bold text-gray-900">
                        {mediator.name}
                      </p>
                      <p className="mt-3 text-base font-semibold text-gray-500">
                        {translated.tagline}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {translated.excerpt}
                      </p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center flex-wrap">
                    {translated.specialties?.map(specialty => {
                      return <Pill>{specialty}</Pill>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Mediators = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      directus {
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
              excerpt
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
    }
  `);
  return <PureMediators {...props} data={data} />;
};

export default Mediators;
