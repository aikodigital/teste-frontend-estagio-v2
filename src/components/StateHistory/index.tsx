import { ApexOptions } from "apexcharts";
import moment from "moment";
import dynamic from "next/dynamic";
import { start } from "repl";
import { EquipStateHistoryType } from "../../types/equipments";

interface StateHistoryProps {
  stateHistory: EquipStateHistoryType;
}

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function StateHistory({ stateHistory }: StateHistoryProps) {
  const seriesData = stateHistory.map((state, index, allStates) => {
    if (index < allStates.length - 1) {
      const startTime = new Date(state.date).getTime();
      const endTime = new Date(allStates[index + 1].date).getTime();
      const data = {
        x: state.state!.name,
        y: [startTime, endTime],
        fillColor: state.state!.color,
      };
      return data;
    }
  });

  seriesData.forEach((state, index) => {
    if (state === undefined) {
      seriesData.splice(index, 1);
    }
  });

  const series = [
    {
      data: [...seriesData],
    },
  ];

  const chartOptions: ApexOptions = {
    chart: {
      defaultLocale: "pt-BR",
      locales: [
        {
          name: "pt-BR",
          options: {
            months: [
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ],
            shortMonths: [
              "Jan",
              "Fev",
              "Mar",
              "Abr",
              "Mai",
              "Jun",
              "Jul",
              "Ago",
              "Set",
              "Out",
              "Nov",
              "Dez",
            ],
          },
        },
      ],
      height: 350,
      type: "rangeBar",
      zoom: {
        enabled: true,
        type: "x",
      },
    },

    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: false,
        },
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: { colors: "white" },
      },
      min: new Date(stateHistory[7].date).getTime(),
      max: new Date(stateHistory[0].date).getTime(),
    },
    yaxis: {
      show: true,
      labels: {
        style: { colors: "white", fontSize: ".75rem", fontWeight: "bold" },
      },
    },
    grid: {
      row: {
        colors: ["#f3f4f5", "#fff"],
        opacity: 1,
      },
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <Chart
        options={chartOptions}
        series={series as []}
        height={300}
        width={"100%"}
        type="rangeBar"
      />
    </div>
  );
}
