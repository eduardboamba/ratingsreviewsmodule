function approve(reviewId, approved)
{
	Restangular.one("reviews/").one(reviewId).then(function (review) {
		review.approved = approved;
		review.save();
		
		console.log(reviewId, approved);
	});
}