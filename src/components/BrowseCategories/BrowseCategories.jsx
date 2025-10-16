import { trackCardClick } from "../../utils/Analytics";
import { useNavigate } from "react-router-dom";

export default function BrowseCategories({ categoriesData }) {
  const navigate = useNavigate();

  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Browse Categories</h2>
            <h3 className="text-body-secondary fw-normal fs-4">
              All files are 100% safe, virus-free, and free for personal or
              commercial use.
            </h3>

            <div className="text-center text-black my-2 px-3 px-md-5">
              <h3 className="text-body-secondary fw-normal fs-4">
                Find the perfect sample files for your projects across different
                categories. Perfect for developers, testers, educators, and
                presentations.
              </h3>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="row g-4">
            {categoriesData.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="category-card h-100 p-4 text-center rounded">
                    <div
                      className="hero-gradient d-inline-flex align-items-center  justify-content-center bg-light rounded mb-3"
                      style={{ width: "64px", height: "64px" }}
                    >
                      <IconComponent size={32} className={category.color} />
                    </div>
                    <h3 className="fw-bold fs-4">{category.title}</h3>
                    <p className="text-body-secondary fw-medium mb-3">
                      {category.description}
                    </p>
                    <div
                      className={`w-50 text-center rounded-pill fw-bold small mb-3 d-inline-flex align-items-center  justify-content-center ${category.bgDownload} ${category.textDownload}`}
                    >
                      {category.downloads}+ Downloads
                    </div>
                    <button
                      className={`btn fw-bold btn-custom-outline w-100 `}
                      onClick={() => {
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }, 100);
                        trackCardClick(category.key);
                        navigate(`sample-${category.key}`);
                      }}
                    >
                      Browse {category.title}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
