import Link from "next/link";
import { useRouter } from "next/router";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Table } from "reactstrap";

import { SetPageQuery } from "./__generated__/SetPageQuery.graphql";
import withPageSetup from "./withPageSetup";

function SetPage() {
  const router = useRouter();
  const data = useLazyLoadQuery<SetPageQuery>(
    graphql`
      query SetPageQuery($id: String) {
        set(filters: { id: $id }) {
          cards {
            category
            hp
            id
            image
            legal {
              expanded
              standard
            }
            level
            name
            rarity
          }
          id
          name
          serie {
            id
            name
          }
        }
      }
    `,
    { id: router.query.setId as string },
  );
  if (!data.set) {
    return <h3>Set not found</h3>;
  }
  return (
    <>
      <h3>
        <Link href="/series">Pokemon TCG</Link>
        <i className="bi-chevron-right" /> <small>SERIES:</small>{" "}
        <Link href={`/series/${router.query.serieId}`}>
          <em>{data.set.serie.name}</em>
        </Link>
        <i className="bi-chevron-right" /> <small>SET:</small>{" "}
        <em>{data.set.name}</em>
      </h3>
      <Table responsive size="sm" striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>HP</th>
            <th>Level</th>
            <th>Rarity</th>
            <th>Legal</th>
          </tr>
        </thead>
        <tbody>
          {data.set.cards.map((card) => (
            <tr key={card.id}>
              <td>
                <Link
                  href={`/series/${data.set.serie.id}/sets/${data.set.id}/cards/${card.id}`}
                >
                  <div className="d-flex align-items-center gap-3">
                    {card.image ? (
                      <img
                        src={`${card.image}/low.webp`}
                        width={40}
                        height={55}
                      />
                    ) : (
                      <div style={{ width: 80 }} />
                    )}
                    {card.name}
                  </div>
                </Link>
              </td>
              <td>{card.category}</td>
              <td>{card.hp}</td>
              <td>{card.level}</td>
              <td>{card.rarity}</td>
              <td>
                {card.legal.standard
                  ? "Standard"
                  : card.legal.expanded
                    ? "Expanded"
                    : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default withPageSetup(SetPage);
