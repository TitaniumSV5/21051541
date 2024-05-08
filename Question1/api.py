from flask import Flask, request, jsonify
import uuid
import requests

app = Flask(__name__)

def fetch_top_products(categoryname, n, min_price, max_price, page):
    url = f'http://20.244.56.144/test/companies/AMZ/categories/{categoryname}/products'
    params = {
        'top': n,
        'minPrice': min_price,
        'maxPrice': max_price,
        'page': page
    }
    response = requests.get(url, params=params)
    if response.status_code == 200:
        products = response.json()
        # Generating unique identifiers for each product
        for product in products:
            product['id'] = str(uuid.uuid4())
        return products
    else:
        return []  

def fetch_product_details(categoryname, productid):
    # Fetching product details 
    pass

@app.route('/categories/<categoryname>/products', methods=['GET'])
def get_top_products(categoryname):
    # Get query parameters
    n = int(request.args.get('top', 10))
    min_price = float(request.args.get('minPrice', 0))
    max_price = float(request.args.get('maxPrice', float('inf')))
    page = int(request.args.get('page', 1))

    # Fetching top products
    products = fetch_top_products(categoryname, n, min_price, max_price, page)

    return jsonify(products)

@app.route('/categories/<categoryname>/products/<productid>', methods=['GET'])
def get_product_details(categoryname, productid):
    # Fetching product details 
    product_details = fetch_product_details(categoryname, productid)
    if product_details:
        return jsonify(product_details)
    else:
        return jsonify({'error': 'Product not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
