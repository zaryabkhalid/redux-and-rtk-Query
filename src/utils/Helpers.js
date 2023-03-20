class Helper {
	static elipses(data, maxValue) {
		const content = data?.split("")?.splice(0, maxValue);
		return content;
	}
}

export default Helper;
