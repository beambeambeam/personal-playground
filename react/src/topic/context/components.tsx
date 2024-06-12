import { useContext } from "react";
import { LevelContext } from "./level";

const Heading = ({ children }: { children: React.ReactNode }) => {
	const level = useContext(LevelContext);

	switch (level) {
		case 1:
			return <div className="text-4xl">{children}</div>;
		case 2:
			return <div className="text-3xl">{children}</div>;
		case 3:
			return <div className="text-2xl">{children}</div>;
		case 4:
			return <div className="text-xl">{children}</div>;
		case 5:
			return <div className="text-lg">{children}</div>;
		case 6:
			return <div className="text-base">{children}</div>;
		default:
			throw Error(`Unknown level: ${level}`);
	}
};

const Section = ({ children }: { children: React.ReactNode }) => {
	const level = useContext(LevelContext);
	return (
		<section className="border-black p-2 border">
			<LevelContext.Provider value={level + 1}>
				{children}
			</LevelContext.Provider>
		</section>
	);
};

export { Heading, Section };
