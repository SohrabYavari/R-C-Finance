interface Props {
  config: any;
  data: any;
}

const RatioTile = ({ config, data }: Props) => {
  const renderedCells = config.map((row: any) => {
    return (
      <li className="py-3 sm:py-4 list-none">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-grey-900 truncate">
              {row.label}
            </p>
            <p className="text-sm font-medium text-grey-900 truncate">
              {row.subTitle}
            </p>
          </div>
        </div>
      </li>
    );
  });

  const renderedData = config.map((row: any) => {
    return (
      <div className="text-base font-semibold text-grey-900">
        {row.render(data)}
      </div>
    );
  });

  return (
    <>
      <div className="card bg-white shadow rounded-lg mt-4 mb-4 md:w-96 sm:w-48 ">
        <div className="card-body flex-row items-center gap-16">
          <h2 className="card-title">{renderedCells}</h2>
          <div>{renderedData}</div>
        </div>
      </div>
    </>
  );
};

export default RatioTile;
