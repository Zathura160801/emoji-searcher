import PropTypes from "prop-types";
import styles from "./Emojis.module.css";
import EmojiBox from "../EmojiBox";
import { useEffect, useState } from "react";
import { filterEmojis } from "../../utils/filterEmojis";
import Empty from "../Empty";

export default function Emojis({ emojisData, searchText, maxResults }) {
  const [filteredEmojis, setFilteredEmojis] = useState([]);

  useEffect(() => {
    setFilteredEmojis(filterEmojis({ emojisData, searchText, maxResults }));
  }, [emojisData, searchText, maxResults]);

  if (filteredEmojis.length > 0) {
    return (
      <div className={styles.emojisGrid}>
        {filteredEmojis.map((data, index) => (
          <EmojiBox key={index} title={data.title} symbol={data.symbol} />
        ))}
      </div>
    );
  } else {
    return <Empty text="Oops, zero finding. Let's try another keyword!" />;
  }
}

Emojis.propTypes = {
  emojisData: PropTypes.array,
  searchText: PropTypes.string,
  maxResults: PropTypes.number,
};
