import React from "react";

export interface CardProps {
  data?: JSON;
  title?: string;
  image?: string;
  altText?: string;
  ingredients?: string[];
  optionalIngredients?: string[];
  instructions?: string[];
}

export function Card({
  title,
  image,
  altText,
  ingredients,
  optionalIngredients,
  instructions,
}: CardProps) {
  return (
    <div>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <img
          className="h-auto lg:h-auto lg:w-1/4 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          src={image}
          title={altText}
        />
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <div className="text-gray-900 text-base">
              {instructions?.map((instruction) => (
                <p>{instruction}</p>
              ))}
            </div>
            <div className="text-gray-600 text-base ">
              <div className="flex ingredients justify-between py-3">
                <div>
                  <p className="font-bold">Ingredients:</p>
                  {ingredients?.map((ingredient) => (
                    <p className="text-gray-800 text-base">{ingredient}</p>
                  ))}
                </div>
                <div className="">
                  <p className="font-bold">Optional Ingredients:</p>
                  {optionalIngredients?.map((optionalIngredient) => (
                    <p className="text-gray-500 text-base flex">
                      {optionalIngredient}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
