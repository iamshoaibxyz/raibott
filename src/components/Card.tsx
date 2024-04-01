export default function Card({ title }: { title: string }) {
  return (
    <div className="card w-80 border bg-base-10 shadow-md">
      <div className="card-body">
        <h2 className="card-title"> {title} </h2>
        <p>
          The RaiBot is the chatbot provider with instegration and services for
          the pooled with the generative AI.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-accent">Check out</button>
        </div>
      </div>
    </div>
  );
}
