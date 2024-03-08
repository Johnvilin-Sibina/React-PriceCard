import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import Card from "./Card";
function App() {
  let data = [
    {
      plan: "Free",
      price: 0,
      features: [
        {
          name: "10 users included",
          enabled: true
        },
        {
          name: "2 GB of storage",
          enabled: true
        },
        {
          name: "Email support",
          enabled: false
        },
        {
          name: "Help center access",
          enabled: false
        }
      ],
      buttonFocus : false
    },
    {
      plan: "Pro",
      price: 15,
      features: [
        {
          name: "20 users included",
          enabled: true
        },
        {
          name: "10 GB of storage",
          enabled: true
        },
        {
          name: "Priority email support",
          enabled: true
        },
        {
          name: "Help center access",
          enabled: false
        }
      ],
      buttonFocus : true
    },
    {
      plan: "Enterprice",
      price: 29,
      features: [
        {
          name: "30 users included",
          enabled: true
        },
        {
          name: "15 GB of storage",
          enabled: true
        },
        {
          name: "Phone and email support",
          enabled: true
        },
        {
          name: "Help center access",
          enabled: true
        }
      ],
      buttonFocus : true,
      boxFocus: true
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
