const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

const asyncForEach = async (array, callback) => {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array)
	}
}

const start = async () => {
	await asyncForEach([7, 8, 9], async (num) => {
		await waitFor(1000)
		console.log(num)
	})
	console.log('Done')
}

start()
