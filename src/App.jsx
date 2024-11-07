import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Empty from "./components/Empty";
import Emojis from "./components/Emojis";
import Input from "./components/Input";

export default function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true);

      try {
        const res = await axios.get(
          // "https://run.mocky.io/v3/d88f2252-3a9e-4699-a0fc-55bd5ba68c30"
          "emoji-api.json"
        );

        setEmojisData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);

        setError(true);
        setLoading(false);
      }
    }

    fetchEmojis();
  }, []);

  const handleSearchEmojis = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Input onChange={handleSearchEmojis} value={searchText} />
        {loading && <Empty text={"Loading..."} />}
        {error && <Empty text={"Ooopsss..."} />}

        {emojisData.length > 0 ? (
          <Emojis emojisData={emojisData} searchText={searchText} />
        ) : (
          <Empty text={"Tidak Ada Data"} />
        )}
      </Container>
    </>
  );
}
