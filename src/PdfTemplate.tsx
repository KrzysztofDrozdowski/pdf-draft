import "./table-styles.scss";

const PdfTemplate = () => {
  return (
    <div className="pdf">
      <div className="pdf__content">
        <div className="pdf__header">
          <div className="pdf__header__title">
            Limit of Detection Panel Preparation - SARS-CoV-2
          </div>
          <div className="pdf__header__logo">Roche logo</div>
        </div>

        <table className="pdf__id-table">
          <tr>
            <td>
              <table>
                <tr>
                  <td>eLN ID:</td>
                  <td>kreyn00012</td>
                </tr>
                <tr>
                  <td>Status:</td>
                  <td>Verified</td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td>User ID:</td>
                  <td>kreyn</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <table className="pdf__details-table">
          <tr>
            <td>
              <table className="pdf__details-table__section">
                <tr>
                  <td>Stock Material Name:</td>
                  <td>SARS-CoV-2</td>
                </tr>
                <tr>
                  <td>Stock Material Number:</td>
                  <td>12P6549</td>
                </tr>
                <tr>
                  <td>Stock Material Lot Number:</td>
                  <td>5678978</td>
                </tr>
                <tr>
                  <td>Stock Material Concentration:</td>
                  <td>5.01E+07 IU/mL</td>
                </tr>
              </table>
            </td>
            <td>
              <table className="pdf__details-table__section">
                <tr>
                  <td>Diluent Name:</td>
                  <td>Plasma</td>
                </tr>
                <tr>
                  <td>Diluent Material Number:</td>
                  <td>123456</td>
                </tr>
                <tr>
                  <td>Diluent Material Lot Number:</td>
                  <td>3XP456</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <table className="pdf__results-table">
          <tr>
            <th>Panel Members</th>
            <th>Name of Predecessor</th>
            <th>Concentration Predecessor [IU/mL]</th>
            <th>Volume of Predecessor [mL]</th>
            <th>Volume of Diluent [mL]</th>
            <th>Dilution Factor</th>
            <th>Final Concentration [IU/mL]</th>
            <th>Total Volume [mL]</th>
          </tr>
          <tr>
            <td>Pre-Dil 1</td>
            <td>SARS-CoV-2</td>
            <td>5.01E+07</td>
            <td>0.020</td>
            <td>1.980</td>
            <td>100</td>
            <td>5.01E+05</td>
            <td>2.0</td>
          </tr>
          <tr>
            <td>Pre-Dil 2</td>
            <td>Pre-Dil 1</td>
            <td>5.01E+05</td>
            <td>0.100</td>
            <td>9.900</td>
            <td>100</td>
            <td>5.00+E03</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>PM01</td>
            <td>Pre-Dil 2</td>
            <td>5.00+E03</td>
            <td>5.000</td>
            <td>45.000</td>
            <td>10</td>
            <td>5.00+E02</td>
            <td>50.0</td>
          </tr>
          <tr>
            <td>PM02</td>
            <td>PM01</td>
            <td>5.00+E02</td>
            <td>25.000</td>
            <td>25.000</td>
            <td>2</td>
            <td>2.50+E02</td>
            <td>50.0</td>
          </tr>
          <tr>
            <td>PM03</td>
            <td>PM02</td>
            <td>2.50+E02</td>
            <td>10.000</td>
            <td>10.000</td>
            <td>2</td>
            <td>1.25+E02</td>
            <td>20.0</td>
          </tr>
        </table>

        <table className="pdf__info-table">
          <tr>
            <td>Date of printing:</td>
            <td>06. Dec. 2022</td>
          </tr>
          <tr>
            <td>Last modified by:</td>
            <td>any user</td>
          </tr>
          <tr>
            <td>Last modified at:</td>
            <td>date</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default PdfTemplate;
