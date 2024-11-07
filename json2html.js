// json2html.js
export default function json2html(data) {
    let html = `<table data-user="golidhekshagna@gmail.com">
                  <thead>
                    <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
                  </thead>
                  <tbody>`;
    
    data.forEach(item => {
      html += '<tr>';
      html += `<td>${item.Name}</td>`;
      html += `<td>${item.Age}</td>`;
      html += item.Gender ? `<td>${item.Gender}</td>` : '';
      html += '</tr>';
    });
  
    html += `</tbody></table>`;
    return html;
  }
  