import {
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
} from "assets/source/image";
import React from "react";

const index = () => {
  const lists = [
    {
      image: Img1,
      name: "image-1",
    },
    {
      image: Img2,
      name: "image-2",
    },
    {
      image: Img3,
      name: "image-3",
    },
    {
      image: Img4,
      name: "image-4",
    },
    {
      image: Img5,
      name: "image-5",
    },
    {
      image: Img6,
      name: "image-6",
    },
    {
      image: Img7,
      name: "image-7",
    },
    {
      image: Img8,
      name: "image-8",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="row min-vh-50">
          {lists ? (
            lists.map((list, index) => {
              return (
                <div className="col-lg-6 py-3" key={`image-${index}`}>
                  <figure className="m-0">
                    <img
                      className="img-fluid w-100 h-image"
                      src={list.image}
                      alt={list.name}
                    />
                  </figure>
                </div>
              );
            })
          ) : (
            <h2 className="text-center">No List in this section</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default index;
