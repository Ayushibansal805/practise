interface Props {
  image: string;
  onClose: () => void;
}

const ImageModal = ({
  image,
  onClose,
}: Props) => {
  return (
    <div
      onClick={onClose}
      className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center
      bg-black/90
      "
    >
      <img
        src={image}
        alt=""
        className="
        max-h-[90vh]
        max-w-[90vw]
        rounded-2xl
        "
      />
    </div>
  );
};

export default ImageModal;