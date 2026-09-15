import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "../common/Card";
import EmptyState from "../layout/EmptyState";

const PopularRoutes = ({ routes = [] }) => {
  const navigate = useNavigate();

  const handleRouteClick = (route) => {
    navigate("/search", {
      state: {
        source: route.source,
        destination: route.destination,
      },
    });
  };

  if (!routes.length) {
    return (
      <section className="popular-routes-section">
        <div className="section-header">
          <h2>Popular routes</h2>
          <p>Explore available routes for your next journey.</p>
        </div>

        <EmptyState
          title="No routes available"
          message="Routes will appear here when they are available."
        />
      </section>
    );
  }

  return (
    <section className="popular-routes-section">
      <div className="section-header">
        <h2>Popular routes</h2>
        <p>Explore available routes for your next journey.</p>
      </div>

      <div className="popular-routes-grid">
        {routes.map((route, index) => (
          <motion.div
            key={route.routeId}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
          >
            <Card
              className="popular-route-card"
              onClick={() => handleRouteClick(route)}
            >
              <div className="popular-route-icon">
                <MapPin size={20} />
              </div>

              <div className="popular-route-content">
                <div className="popular-route-cities">
                  <span>{route.source}</span>

                  <ArrowRight size={18} />

                  <span>{route.destination}</span>
                </div>

                {route.departureTime && route.arrivalTime && (
                  <p>
                    {route.departureTime} — {route.arrivalTime}
                  </p>
                )}
              </div>

              <ArrowRight
                size={18}
                className="popular-route-arrow"
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularRoutes;