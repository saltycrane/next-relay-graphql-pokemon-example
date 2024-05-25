import Link from "next/link";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Table } from "reactstrap";

import { SeriesPageQuery } from "./__generated__/SeriesPageQuery.graphql";
import { isNotNull } from "./isNotNull";
import withPageSetup from "./withPageSetup";

function SeriesPage() {
  const data = useLazyLoadQuery<SeriesPageQuery>(
    graphql`
      query SeriesPageQuery {
        series {
          id
          logo
          name
        }
      }
    `,
    {},
  );
  return (
    <>
      <h3>Pokemon TCG Series</h3>
      <Table responsive size="sm" striped>
        <tbody>
          {data.series?.filter(isNotNull).map((serie) => (
            <tr key={serie.id}>
              <td>
                <Link href={`/series/${serie.id}`}>
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="d-flex justify-content-center"
                      style={{ width: 80 }}
                    >
                      {serie.logo && (
                        <img
                          src={`${serie.logo}.webp`}
                          style={{ maxHeight: 40, maxWidth: 80 }}
                        />
                      )}
                    </div>
                    {serie.name}
                  </div>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default withPageSetup(SeriesPage);
