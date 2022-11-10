import React from "react";

export interface CardProps {
  title?: string;
  image?: string;
  ingredients?: string;
  instructions?: string; 
}

export function Card({title, image, ingredients, instructions}:CardProps) {
  return(
    <div className="card">
      <div>
        {title}
      </div>
      <div>
        {image}
      </div>
      <div>
        {ingredients}
      </div>
      <div>
        {instructions}
      </div>
    </div>)
}