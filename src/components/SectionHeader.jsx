// eslint-disable-next-line react/prop-types
const SectionHeader = ({ title, description, color }) => {
	return (
		<div>
			<div className={`text-center text-${color}`}>
				<h2 className="font-bold text-2xl">{title}</h2>
				<p className="mt-2">{description}</p>
				<div className={`my-4 w-40 h-1 mx-auto bg-${color} rounded`}></div>
			</div>
		</div>
	);
};

export default SectionHeader;
