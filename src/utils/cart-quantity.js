import { useState } from "react";

export default function CartQuantity(onClick, product) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(1);
    if (onClick) onClick({ ...product, quantity: 1 });
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    if (onClick) onClick({ ...product, quantity: quantity + 1 });
  };

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(prev - 1, 0));
    if (onClick && quantity > 1) {
      onClick({ ...product, quantity: quantity - 1 });
    }
  };

  return {
    quantity,
    handleAddToCart,
    handleIncrease,
    handleDecrease,
  };
}
