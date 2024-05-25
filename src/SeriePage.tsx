import Link from "next/link";
import { useRouter } from "next/router";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Table } from "reactstrap";

import { SeriePageQuery } from "./__generated__/SeriePageQuery.graphql";
import { isNotNull } from "./isNotNull";
import withPageSetup from "./withPageSetup";

function SeriePage() {
  const router = useRouter();
  const data = useLazyLoadQuery<SeriePageQuery>(
    graphql`
      query SeriePageQuery($id: String) {
        serie(filters: { id: $id }) {
          id
          name
          sets {
            cardCount {
              total
            }
            id
            logo
            name
            releaseDate
            symbol
            tcgOnline
          }
        }
      }
    `,
    { id: router.query.serieId as string },
  );

  if (!data.serie) {
    return <h3>Series not found</h3>;
  }

  return (
    <>
      <h3>
        <Link href="/series">Pokemon TCG</Link>
        <i className="bi-chevron-right" /> <small>SERIES:</small>{" "}
        <em>{data.serie.name}</em>
      </h3>
      <Table responsive size="sm" striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Release Date</th>
            <th>Card Count</th>
            <th>TCG Online</th>
          </tr>
        </thead>
        <tbody>
          {data.serie.sets.filter(isNotNull).map((set) => (
            <tr key={set.id}>
              <td>
                <Link href={`/series/${data.serie?.id}/sets/${set.id}`}>
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="d-flex justify-content-center"
                      style={{ width: 80 }}
                    >
                      {set.logo && (
                        <img
                          src={`${set.logo}.webp`}
                          style={{ maxHeight: 40, maxWidth: 80 }}
                        />
                      )}
                    </div>
                    {set.name}
                  </div>
                </Link>
              </td>
              <td>{set.releaseDate}</td>
              <td>{set.cardCount.total}</td>
              <td>{set.tcgOnline}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default withPageSetup(SeriePage);
