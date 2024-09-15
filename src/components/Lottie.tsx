import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LottieProps {
	src: string;
	styles: string;
}

const Lottie = ({ src, styles }: LottieProps) => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 1); // Opóźnienie 3 sekundy

		return () => clearTimeout(timer); // Czysta funkcja, która usuwa timer w przypadku odmontowania komponentu
	}, []);

	return (
		<>
			{isLoaded && (
				<DotLottieReact src={src} loop autoplay className={styles} />
			)}
		</>
	);
};

export default Lottie;
