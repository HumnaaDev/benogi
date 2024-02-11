"use client";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputWrapper } from "./SearchInput.style";
import debounce from "lodash.debounce";

type ISearchInputProps = {
  handleSearch: (query: string) => void;
  label: string;
  placeholder: string;
};

export const SearchInput: React.FC<ISearchInputProps> = ({
  handleSearch,
  label,
  placeholder,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm]);

  const search = async (query: string) => {
    handleSearch(query);
  };

  const debouncedSearch = debounce(search, 300);

  return (
    <SearchInputWrapper className="search-input">
      <TextField
        fullWidth
        label={label}
        variant="outlined"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <>
              <SearchIcon color="action" />
            </>
          ),
        }}
      />
    </SearchInputWrapper>
  );
};
