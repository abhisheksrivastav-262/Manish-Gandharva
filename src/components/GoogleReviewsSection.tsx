import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { Star, ChevronLeft, ChevronRight, Search, Quote, CheckCircle2, X, ExternalLink } from "lucide-react";
import { GOOGLE_REVIEWS_DATA, type GoogleReview } from "@/data/googleReviews";
import { Button } from "@/components/ui/button";

interface GoogleReviewsSectionProps {
  limit?: number;
  showTitle?: boolean;
  isHomepagePreview?: boolean;
}

export function GoogleReviewsSection({
  limit,
  showTitle = true,
  isHomepagePreview = false,
}: GoogleReviewsSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedReview, setSelectedReview] = useState<GoogleReview | null>(null);
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});

  const itemsPerPage = limit || 9;

  // Filter Categories
  const categories = ["All", "Insurance", "Loans", "SIP Wealth Creation", "Retirement"];

  const filteredReviews = useMemo(() => {
    return GOOGLE_REVIEWS_DATA.filter((review) => {
      const matchesCategory =
        activeTab === "All" ||
        (review.serviceCategory &&
          review.serviceCategory.toLowerCase().includes(activeTab.toLowerCase()));

      const matchesSearch =
        searchQuery === "" ||
        review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (review.serviceCategory &&
          review.serviceCategory.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const displayedReviews = useMemo(() => {
    if (limit && isHomepagePreview) {
      return filteredReviews.slice(0, limit);
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredReviews.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredReviews, currentPage, itemsPerPage, limit, isHomepagePreview]);

  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage);

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section className="section google-reviews-container" id="google-reviews">
      <div className="container">
        {showTitle && (
          <div className="section-heading centered-heading" data-reveal>
            <div className="google-badge-inline">
              <svg viewBox="0 0 24 24" width="20" height="20" className="google-g-logo">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Verified Google Business Reviews</span>
            </div>
            <h2>
              {isHomepagePreview ? "Trusted by Clients. Guided by Experience." : "What Our Clients Say"}
            </h2>
            <p>
              {isHomepagePreview
                ? "See what our clients have shared about their experience with Manish Gandharva on Google."
                : "Real feedback from our verified clients on Google Maps & Search"}
            </p>

            {/* Google Rating Summary Bar */}
            <div className="google-rating-summary">
              <div className="rating-score">
                <span className="big-number">5.0</span>
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="star-filled" fill="#EAB308" color="#EAB308" />
                  ))}
                </div>
              </div>
              <div className="rating-trust-text">
                <strong>43+ Verified Client Reviews</strong>
                <span>Real feedback from customers who shared their experience on Google</span>
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar (Only shown on full list or if not homepage) */}
        {!isHomepagePreview && (
          <div className="reviews-filter-bar" data-reveal>
            <div className="filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveTab(cat);
                    setCurrentPage(1);
                  }}
                  className={`filter-tab-btn ${activeTab === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="reviews-search-box">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search reviews by keyword or name..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery("")}>
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="google-reviews-grid" data-reveal>
          {displayedReviews.length > 0 ? (
            displayedReviews.map((review) => {
              const isLong = review.text.length > 180;
              const isExpanded = expandedReviews[review.id];

              return (
                <article key={review.id} className="review-card">
                  <div className="review-card-header">
                    <div
                      className="reviewer-avatar"
                      style={{ backgroundColor: review.avatarBg || "#1e3a8a" }}
                    >
                      {getInitials(review.name)}
                    </div>
                    <div className="reviewer-info">
                      <h4 className="reviewer-name">{review.name}</h4>
                      <div className="review-meta">
                        <span className="review-date">{review.date}</span>
                        <span className="bullet-dot">•</span>
                        <span className="google-source-label">
                          <svg viewBox="0 0 24 24" width="12" height="12" className="mini-google-g">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                          </svg>
                          Google Review
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="review-rating-row">
                    <div className="stars-flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="#EAB308" color="#EAB308" />
                      ))}
                    </div>
                    {review.serviceCategory && (
                      <span className="service-tag">{review.serviceCategory}</span>
                    )}
                  </div>

                  <div className="review-body">
                    <Quote className="quote-bg-icon" size={32} />
                    <p className="review-text">
                      {isLong && !isExpanded ? `${review.text.slice(0, 175)}...` : review.text}
                    </p>
                    {isLong && (
                      <button
                        onClick={() => setSelectedReview(review)}
                        className="read-more-btn"
                      >
                        Read More
                      </button>
                    )}
                  </div>

                  <div className="review-verified-footer">
                    <CheckCircle2 size={13} className="verified-check" />
                    <span>Verified Customer</span>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="no-reviews-found">
              <p>No customer reviews matched your search filter.</p>
              <Button variant="outline" size="sm" onClick={() => { setSearchQuery(""); setActiveTab("All"); }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>

        {/* Pagination Controls for /reviews route */}
        {!isHomepagePreview && totalPages > 1 && (
          <div className="reviews-pagination" data-reveal>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft size={16} /> Previous
            </Button>
            <span className="page-indicator">
              Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            >
              Next <ChevronRight size={16} />
            </Button>
          </div>
        )}

        {/* Action Button on Homepage */}
        {isHomepagePreview && (
          <div className="homepage-reviews-cta" data-reveal>
            <Button asChild size="lg" className="gold-button">
              <Link to="/reviews">View All Google Reviews ({GOOGLE_REVIEWS_DATA.length}) →</Link>
            </Button>
          </div>
        )}

        {/* Modal for Reading Full Review */}
        {selectedReview && (
          <div className="review-modal-backdrop" onClick={() => setSelectedReview(null)}>
            <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedReview(null)}>
                <X size={20} />
              </button>
              <div className="modal-header">
                <div
                  className="reviewer-avatar large-avatar"
                  style={{ backgroundColor: selectedReview.avatarBg || "#1e3a8a" }}
                >
                  {getInitials(selectedReview.name)}
                </div>
                <div>
                  <h3 className="modal-reviewer-name">{selectedReview.name}</h3>
                  <div className="review-meta">
                    <span>{selectedReview.date}</span>
                    <span className="bullet-dot">•</span>
                    <span className="google-source-label">Google Review</span>
                  </div>
                </div>
              </div>
              <div className="stars-flex modal-stars">
                {[...Array(selectedReview.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#EAB308" color="#EAB308" />
                ))}
              </div>
              {selectedReview.serviceCategory && (
                <span className="service-tag modal-tag">{selectedReview.serviceCategory}</span>
              )}
              <div className="modal-review-text">
                <p>{selectedReview.text}</p>
              </div>
              <div className="modal-footer">
                <div className="verified-badge-row">
                  <CheckCircle2 size={16} className="verified-check" />
                  <span>Real Verified Google Review</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedReview(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
