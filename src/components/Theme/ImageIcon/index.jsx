import styles from "./ImageIcon.module.css";

const ImageIcon = ({iconUrl, altText}) => {
  return (
    <img src={process.env.PUBLIC_URL+ iconUrl} alt={altText} className={styles.icon}/>
  )
}

export default ImageIcon
