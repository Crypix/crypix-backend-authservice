function ValidateData(DataToValidate: { [key: string]: any }, DataToCheck: { [key: string]: any }): { count: number; data: { [key: string]: any } } {
	const result: { count: number; data: { [key: string]: any } } = { count: 0, data: {} };
	const keys = Object.keys(DataToCheck);
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (!DataToCheck.hasOwnProperty(key)) continue;
		const currentValue = DataToValidate;
		const newValue = DataToCheck[key];
		if (currentValue !== newValue) {
			result.data[key] = newValue;
		}
	}
	result.count = Object.keys(result.data).length;
	return result;
}

export { ValidateData };
