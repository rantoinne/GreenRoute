import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import KEY_MAPPING from '../utils/keyMapper';
import './components.css';

type Props = {
  data: any[];
  isMobile: boolean;
}

const ResponsiveTable = (props: Props) => {
  if (props.isMobile) {
    return (
      <>
        {
          props.data.map((item: any, idx: number) => (
            <div
              key={idx}
              className="mobile-cell-wrapper"
            >
              <img
                alt={item[KEY_MAPPING.name]}
                src={item[KEY_MAPPING.image]}
                className="product-image-mobile"
              />
              <div className="mobile-product-info-wrapper">
                <p className="product-description">{item[KEY_MAPPING.name]}</p>
                <p className="product-denomination">{item[KEY_MAPPING.denomination]}</p>
                <p className="product-price">₹{item[KEY_MAPPING.price]}</p>
              </div>
            </div>
          ))
        }
      </>
    )
  }
  
  return (
    <Table>
        <Tbody>
          {props.data.map((item: any, idx: number) => (
            <Tr key={idx}>
              <Td id="remove-padding-id" className="table-element-override-class">
                <img
                  alt={item[KEY_MAPPING.name]}
                  src={item[KEY_MAPPING.image]}
                  className="product-image"
                />
              </Td>
              <Td id="remove-padding-id" className="table-element-override-class">{item[KEY_MAPPING.name]}</Td>
              <Td id="remove-padding-id" className="table-element-override-class">₹{item[KEY_MAPPING.price]} per {item[KEY_MAPPING.denomination]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
  )
}

export default ResponsiveTable;
