import React, { useState } from "react";
import { Slider, Typography, Grid } from "@mui/material";
import { SliderWrapper } from "./Slider.style";

type IRangeSliderFilterProps = { onSlide: (value: string) => void };

export const RangeSlider: React.FC<IRangeSliderFilterProps> = ({ onSlide }) => {
  const [range, setRange] = useState<number>(0);

  const handleRangeChange = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setRange(+value);
    onSlide(value);
  };

  return (
    <SliderWrapper className="slider-container">
      <Grid className="slider-range-wrapper">
        <Grid>
          <Typography className="slider-text">{0}</Typography>
        </Grid>
        <Grid>
          <Typography className="slider-text" align="right">
            {100}
          </Typography>
        </Grid>
      </Grid>
      <Grid className="slider-wrapper">
        <Grid className="slider-div">
          <Slider
            data-testid="my-slider"
            value={range}
            onChange={(e) => handleRangeChange(e)}
            valueLabelDisplay="auto"
            aria-label="Small"
          />
        </Grid>
      </Grid>
    </SliderWrapper>
  );
};
