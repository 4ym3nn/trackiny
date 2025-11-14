"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PencilLine, Trash2 } from "lucide-react";
import { useState } from "react";
import { ProductModal } from "../../products/productModel";

interface  Product  {
  _id: string;
  name: string;
  type: string;
  available: string;
  additionDate?: Date;
}


const initialProducts: Product[] = [
  {
    _id: "1",
    name: "Electronic Device",
    type: "Electronics",
    additionDate: new Date(),
    available: 'available'
  },
  {
    _id: "2",
    name: "Furniture Item",
    type: "Furniture",
    additionDate: new Date(),
    available: 'unavailable'
  },
  {
    _id: "3",
    name: "Clothing Item",
    type: "Clothing",
    additionDate: new Date(),
    available: 'available'
  }
];


const BillingTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

   const [products, setProducts] = useState<Product[]>(initialProducts);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    
    const handleAddProduct = (productData: Product) => {
      const newProduct: Product = {
        _id: Date.now().toString(),
        name: productData.name,
        type: 'Default',
        additionDate: new Date(),
        available: 'available'
      };
      setProducts([...products, newProduct]);
    };

  const filtered = Array.isArray(products)
    ? products.filter(
        (h: Product) =>
          h.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
          h.type.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
          h.available.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : [];

  return (
    <div className="space-y-6 w-5/6 ">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <Input
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              className="max-w-sm p-3"
            />
            <Button onClick={() => setIsModalOpen(true)}>Ajouter un Produit</Button>
          </div>
          <Table >
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Name</TableHead>
                <TableHead className="text-center">Type</TableHead>
                <TableHead className="text-center">Addition Date</TableHead>
                <TableHead className="text-center">Availability</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody >
              {filtered &&
                filtered.map((item: Product) => (
                  <TableRow key={item.name} className="odd:bg-gray-100">
                    <TableCell className="text-center">{item.name}</TableCell>
                    <TableCell className="text-center">{item.type}</TableCell>
                    <TableCell className="text-center">
                      {item.additionDate ? new Date(item.additionDate).toLocaleDateString() : '-'}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.available}
                    </TableCell>
                    <TableCell className="space-x-2 flex justify-end gap-4">
                      <PencilLine className="cursor-pointer" />
                      <Trash2 className="cursor-pointer" />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <ProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddProduct}
              />
    </div>
  );
};
export default BillingTable;
