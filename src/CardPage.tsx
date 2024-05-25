import Link from "next/link";
import { useRouter } from "next/router";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Table } from "reactstrap";

import { CardPageQuery } from "./__generated__/CardPageQuery.graphql";
import { isNotNull } from "./isNotNull";
import withPageSetup from "./withPageSetup";

function CardPage() {
  const router = useRouter();
  const data = useLazyLoadQuery<CardPageQuery>(
    graphql`
      query CardPageQuery($id: ID) {
        card(filters: { id: $id }) {
          abilities {
            effect
            name
            type
          }
          attacks {
            cost
            damage
            effect
            name
          }
          category
          description
          dexId
          effect
          energyType
          evolveFrom
          hp
          illustrator
          image
          item {
            effect
            name
          }
          legal {
            expanded
            standard
          }
          level
          localId
          name
          rarity
          regulationMark
          resistances {
            type
            value
          }
          retreat
          set {
            name
            serie {
              name
            }
          }
          stage
          suffix
          trainerType
          types
          variants {
            firstEdition
            holo
            normal
            reverse
            wPromo
          }
          weaknesses {
            type
            value
          }
        }
      }
    `,
    { id: router.query.cardId as string },
  );

  if (!data.card) {
    return <h3>Card not found</h3>;
  }

  return (
    <>
      <h3 className="mb-4">
        <Link href="/series">Pokemon TCG</Link>
        <i className="bi-chevron-right" /> <small>SERIE:</small>{" "}
        <Link href={`/series/${router.query.serieId}`}>
          <em>{data.card.set.serie.name}</em>
        </Link>
        <i className="bi-chevron-right" /> <small>SET:</small>{" "}
        <Link
          href={`/series/${router.query.serieId}/sets/${router.query.setId}`}
        >
          <em>{data.card.set.name}</em>
        </Link>
        <i className="bi-chevron-right" /> <small>CARD:</small>{" "}
        <em>{data.card.name}</em>
      </h3>
      <div className="d-flex align-items-start flex-wrap gap-4">
        <img className="img-fluid" src={`${data.card.image}/high.webp`} />
        <Table bordered responsive size="sm">
          <tr>
            <th>Name</th>
            <td>{data.card.name}</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{data.card.category}</td>
          </tr>
          <tr>
            <th>Energy Type</th>
            <td>{data.card.energyType}</td>
          </tr>
          <tr>
            <th>Level</th>
            <td>{data.card.level}</td>
          </tr>
          <tr>
            <th>Stage</th>
            <td>{data.card.stage}</td>
          </tr>
          <tr>
            <th>HP</th>
            <td>{data.card.hp}</td>
          </tr>
          <tr>
            <th>Retreat</th>
            <td>{data.card.retreat}</td>
          </tr>
          <tr>
            <th>Illustrator</th>
            <td>{data.card.illustrator}</td>
          </tr>
          <tr>
            <th>Evolve From</th>
            <td>{data.card.evolveFrom}</td>
          </tr>
          <tr>
            <th>Regulation Mark</th>
            <td>{data.card.regulationMark}</td>
          </tr>
          <tr>
            <th>Rarity</th>
            <td>{data.card.rarity}</td>
          </tr>
          <tr>
            <th>Local ID</th>
            <td>{data.card.localId}</td>
          </tr>
          <tr>
            <th>Trainer Type</th>
            <td>{data.card.trainerType}</td>
          </tr>
          <tr>
            <th>Types</th>
            <td>{data.card.types?.join(", ")}</td>
          </tr>
          <tr>
            <th>Weaknesses</th>
            <td>
              {data.card.weaknesses?.filter(isNotNull).map((weakness) => (
                <span key={weakness.type}>
                  {weakness.type} {weakness.value}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>Resistances</th>
            <td>
              {data.card.resistances?.filter(isNotNull).map((resistance) => (
                <span key={resistance.type}>
                  {resistance.type} {resistance.value}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>Abilities</th>
            <td>
              {data.card.abilities?.filter(isNotNull).map((ability) => (
                <div key={ability.name}>
                  <strong>{ability.name}</strong>
                  <p>{ability.effect}</p>
                </div>
              ))}
            </td>
          </tr>
          <tr>
            <th>Attacks</th>
            <td>
              {data.card.attacks?.filter(isNotNull).map((attack) => (
                <div key={attack.name}>
                  <strong>{attack.name}</strong>
                  <p>
                    {attack.cost?.filter(isNotNull).join(", ")} {attack.damage}
                  </p>
                  <p>{attack.effect}</p>
                </div>
              ))}
            </td>
          </tr>
          <tr>
            <th>Item</th>
            <td>
              {data.card.item && (
                <div>
                  <strong>{data.card.item.name}</strong>
                  <p>{data.card.item.effect}</p>
                </div>
              )}
            </td>
          </tr>
          <tr>
            <th>Effect</th>
            <td>{data.card.effect}</td>
          </tr>
          <tr>
            <th>Legal</th>
            <td>
              <div>
                <strong>Standard:</strong>{" "}
                {data.card.legal.standard ? "Yes" : "No"}
              </div>
              <div>
                <strong>Expanded:</strong>{" "}
                {data.card.legal.expanded ? "Yes" : "No"}
              </div>
            </td>
          </tr>
          <tr>
            <th>Variants</th>
            <td>
              <div className="text-capitalize">
                {(
                  [
                    "firstEdition",
                    "holo",
                    "normal",
                    "reverse",
                    "wPromo",
                  ] as const
                )
                  .filter(
                    (variantName) =>
                      data.card?.variants && data.card.variants[variantName],
                  )
                  .join(", ")}
              </div>
            </td>
          </tr>
        </Table>
      </div>
    </>
  );
}

export default withPageSetup(CardPage);
