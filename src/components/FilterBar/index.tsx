import { useEffect, useState } from "react";
import { MdFilterList } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./styles.module.scss";
import { useEquips } from "../../hooks/useEquips";

export function FilterBar() {
  const { handleSearchEquipments } = useEquips();
  const [category, setCategory] = useState("model");
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleSearchEquipments(category, search);
  }, [category, search]);

  return (
    <div className={styles.searchContainer}>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="model">Modelo</option>
        <option value="state">Estado</option>
        <option value="name">Nome</option>
      </select>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <AiOutlineSearch />
    </div>
  );
}
