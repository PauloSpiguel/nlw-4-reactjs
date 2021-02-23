import React, { useState } from "react";

import { Container } from "./styles";

const ExperienceBar: React.FC = () => {
  const [experienceValue, setExperienceValue] = useState(300);
  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${(experienceValue / 600) * 100}%` }}></div>
        <span
          className="current-experience"
          style={{ left: `${(experienceValue / 600) * 100}%` }}
        >
          {experienceValue} xp
        </span>
      </div>
      <span>600 xp</span>
    </Container>
  );
};

export default ExperienceBar;
