import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Announcements array
const announcements = [
//   { emoji: "🎯", text: "Registration Deadline: February 23" },
  {
    emoji: "🚀",
    text: "Registration Deadline Extended: February 23",
  },
  //   { emoji: "🏆", text: "Exciting Prizes Await! Don't Miss Out!" },
];

// Toast Styles (Removed Gradient)
const toastStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "auto",
  minWidth: "250px",
  maxWidth: "90vw",
  padding: "12px 20px",
  fontWeight: "600",
  borderRadius: "9px",
  //   background: "#b3a3a3", // Fixed solid color
  background: "linear-gradient(to right, #6e2828, #e57373 )",
  color: "#fff",
  whiteSpace: "pre-line",
  transition: "all 0.3s ease",
  fontSize: "16px",
};

// Effect to show announcements with emojis styled separately
const useShowAnnouncements = () => {
  const hasShown = useRef(false);

  useEffect(() => {
    if (!hasShown.current) {
      hasShown.current = true;

      announcements.forEach((announcement, index) => {
        setTimeout(() => {
          toast.info(
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "1.5rem" }}>{announcement.emoji}</span>
              <span>{announcement.text}</span>
            </div>,
            {
              position:
                window.innerWidth < 1024 ? "bottom-center" : "bottom-right", // Dynamic positioning
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              icon: false, // No default Toastify icon
              theme: "dark",
              style: toastStyles,
            }
          );
        }, index * 6000); // Delay between toasts
      });
    }
  }, []);
};

// Function component
function AnnouncementToast() {
  useShowAnnouncements();
  return <ToastContainer />;
}

export default AnnouncementToast;
