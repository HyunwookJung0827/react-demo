import bullsEye from "../assets/Emojis/bulls-eye.webp";
import thumbsUp from "../assets/Emojis/thumbs-up.webp";
import meh from "../assets/Emojis/meh.webp";
import { Image, ImageProps } from "antd";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps} = { // We tell Typescript that it can have any number of keys and they are numbers
    3: { src: meh, alt: "meh", width: '25px', height: '25px' },
    4: { src: thumbsUp, alt: "recommended", width: '25px', height: '25px' },
    5: { src: bullsEye, alt: "exceptional", width: '35px', height: '35px' },
  };
  return <Image {...emojiMap[rating]} preview={false}/>;
};

export default Emoji;
