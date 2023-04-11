import { Carousel } from "primereact/carousel";

const ImageCarousel = ({ data }) => {
  const template = (image) => {
    return (
      <div className="h-32 px-3">
        <img className="h-full w-full" src={image.url} alt={image.id} />
      </div>
    );
  };

  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
  ];

  return (
    <>
      <Carousel
        value={data}
        responsiveOptions={responsiveOptions}
        itemTemplate={template}
        numVisible={5}
        numScroll={1}
      />
    </>
  );
};

export default ImageCarousel;
