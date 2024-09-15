import React, { Suspense, lazy } from "react";

const Lottie = lazy(() => import("./Lottie"));

interface LazyLottieProps {
	src: string;
	styles: string;
}

const LazyLottie = ({ src, styles }: LazyLottieProps) => {
	return (
		<Suspense fallback={<div>Loading animation...</div>}>
			<Lottie src={src} styles={styles} />
		</Suspense>
	);
};

export default LazyLottie;
