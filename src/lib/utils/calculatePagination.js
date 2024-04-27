export function calculatePagination(currentPage, totalPages) {
	const pagination = [];
	let countOfDotItems = 0;

	if (!totalPages && 1 >= totalPages) {
		return pagination;
	}

	if (0 < currentPage - 1) {
		pagination.push(currentPage - 1);
	}

	pagination.push(currentPage);

	if (totalPages >= currentPage + 1) {
		pagination.push(currentPage + 1);
	}

	if (1 < pagination[0] - 1) {
		pagination.unshift('...');
		countOfDotItems += 1;
	}

	if (2 < totalPages - pagination[pagination.length - (2 - countOfDotItems)]) {
		pagination.push('...');
	}

	if (-1 === pagination.indexOf(1)) {
		pagination.unshift(1);
	}

	if (-1 === pagination.indexOf(totalPages)) {
		pagination.push(totalPages);
	}

	return pagination;
}
