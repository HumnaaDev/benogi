"use client";
import React, { FC, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FilterWrapper } from "./Filters.style";
import { FILTER_OPTIONS } from "@/constants";
import { RangeSlider } from "../Slider/Slider";
import { convertToQueryParams } from "@/utils";
import { useSearchParams } from "next/navigation";

type IFilterComponent = {
  onSelect: (selected: string) => void;
};

export const FilterComponent: FC<IFilterComponent> = ({ onSelect }) => {
  const searchParams = useSearchParams();
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(
    null,
  );

  const handleChange = (panel: string) => (_: any, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : null);
  };

  const handleFilterSelect = (key: string, value: string) => {
    const query = convertToQueryParams(key, value, searchParams);
    onSelect(query);
  };

  return (
    <FilterWrapper>
      <Typography className="filter-heading">Filters</Typography>
      {FILTER_OPTIONS.map((filter, index) => (
        <Accordion
          key={filter.label}
          className="filter-container"
          expanded={expandedAccordion === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{filter.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl fullWidth>
              <RadioGroup
                name={filter.label}
                onChange={(event) =>
                  handleFilterSelect(filter.label, event.target.value)
                }
              >
                {filter.label === "Calories" ? (
                  <RangeSlider
                    onSlide={(value) => handleFilterSelect(filter.label, value)}
                  />
                ) : (
                  filter.subOptions.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))
                )}
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      ))}
    </FilterWrapper>
  );
};
