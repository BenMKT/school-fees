'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  CreditCard,
  Smartphone,
  Building,
  Wallet,
  Shield,
  ArrowRight,
} from 'lucide-react';

const pendingPayments = [
  {
    id: 'FEE001',
    student: 'Emma Davis',
    avatar: 'ED',
    feeType: 'Tuition',
    amount: 400,
    dueDate: '2024-02-15',
    description: 'Q2 Tuition fees for Grade 8',
    priority: 'high',
  },
  {
    id: 'FEE002',
    student: 'Emma Davis',
    avatar: 'ED',
    feeType: 'Transport',
    amount: 200,
    dueDate: '2024-02-20',
    description: 'Monthly transport service',
    priority: 'medium',
  },
  {
    id: 'FEE003',
    student: 'Michael Davis',
    avatar: 'MD',
    feeType: 'Laboratory',
    amount: 300,
    dueDate: '2024-03-15',
    description: 'Science lab materials and equipment',
    priority: 'low',
  },
];

const paymentMethods = [
  {
    id: 'credit-card',
    name: 'Credit/Debit Card',
    description: 'Visa, Mastercard, American Express',
    icon: CreditCard,
    fee: '2.9% + $0.30',
  },
  {
    id: 'bank-transfer',
    name: 'Bank Transfer',
    description: 'Direct bank account transfer',
    icon: Building,
    fee: 'Free',
  },
  {
    id: 'mobile-money',
    name: 'Mobile Money',
    description: 'M-Pesa, Airtel Money, MTN Mobile Money',
    icon: Smartphone,
    fee: '1.5%',
  },
  {
    id: 'digital-wallet',
    name: 'Digital Wallet',
    description: 'PayPal, Apple Pay, Google Pay',
    icon: Wallet,
    fee: '2.5%',
  },
];

export function PaymentInterface() {
  const [selectedPayments, setSelectedPayments] = useState<string[]>([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const handlePaymentSelection = (paymentId: string, checked: boolean) => {
    if (checked) {
      setSelectedPayments([...selectedPayments, paymentId]);
    } else {
      setSelectedPayments(selectedPayments.filter((id) => id !== paymentId));
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedPayments(pendingPayments.map((payment) => payment.id));
    } else {
      setSelectedPayments([]);
    }
  };

  const selectedPaymentDetails = pendingPayments.filter((payment) =>
    selectedPayments.includes(payment.id),
  );
  const totalAmount = selectedPaymentDetails.reduce(
    (sum, payment) => sum + payment.amount,
    0,
  );

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
            High Priority
          </Badge>
        );
      case 'medium':
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            Medium Priority
          </Badge>
        );
      case 'low':
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Low Priority
          </Badge>
        );
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Make Payment
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Select fees to pay and choose your preferred payment method
        </p>
      </div>

      <Tabs value={`step-${currentStep}`} className="space-y-6">
        <TabsList className="flex w-full h-auto overflow-x-auto sm:grid sm:grid-cols-3">
          <TabsTrigger
            value="step-1"
            disabled={currentStep < 1}
            className="shrink-0 sm:shrink"
          >
            1. Select Fees
          </TabsTrigger>
          <TabsTrigger
            value="step-2"
            disabled={currentStep < 2}
            className="shrink-0 sm:shrink"
          >
            2. Payment Method
          </TabsTrigger>
          <TabsTrigger
            value="step-3"
            disabled={currentStep < 3}
            className="shrink-0 sm:shrink"
          >
            3. Confirm & Pay
          </TabsTrigger>
        </TabsList>

        <TabsContent value="step-1" className="space-y-6">
          {/* Step 1: Select Fees */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Outstanding Fees</CardTitle>
                  <CardDescription>
                    Select the fees you want to pay
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={selectedPayments.length === pendingPayments.length}
                    onCheckedChange={handleSelectAll}
                  />
                  <Label>Select All</Label>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingPayments.map((payment) => (
                  <div
                    key={payment.id}
                    className={`p-4 border rounded-lg transition-colors ${
                      selectedPayments.includes(payment.id)
                        ? 'bg-purple-50 border-purple-200'
                        : ''
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <Checkbox
                        checked={selectedPayments.includes(payment.id)}
                        onCheckedChange={(checked) =>
                          handlePaymentSelection(payment.id, checked as boolean)
                        }
                      />
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={`/placeholder.svg?height=40&width=40`}
                          alt={payment.student}
                        />
                        <AvatarFallback>{payment.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{payment.student}</h4>
                            <p className="text-sm text-muted-foreground">
                              {payment.feeType}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-lg">
                              ${payment.amount}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Due: {payment.dueDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">
                            {payment.description}
                          </p>
                          {getPriorityBadge(payment.priority)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedPayments.length > 0 && (
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Selected Payments</h4>
                      <p className="text-sm text-muted-foreground">
                        {selectedPayments.length} fee
                        {selectedPayments.length > 1 ? 's' : ''} selected
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600">
                        ${totalAmount}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Total Amount
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {selectedPayments.length > 0 && (
            <div className="flex justify-end">
              <Button
                onClick={() => setCurrentStep(2)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Continue to Payment Method
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="step-2" className="space-y-6">
          {/* Step 2: Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle>Choose Payment Method</CardTitle>
              <CardDescription>
                Select how you&apos;d like to pay for the selected fees
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedPaymentMethod === method.id
                        ? 'bg-purple-50 border-purple-200'
                        : 'hover:bg-muted/50'
                    }`}
                    onClick={() => setSelectedPaymentMethod(method.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-muted rounded-lg">
                        <method.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{method.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {method.description}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          Fee: {method.fee}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {selectedPaymentMethod && (
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setCurrentStep(1)}>
                Back to Fee Selection
              </Button>
              <Button
                onClick={() => setCurrentStep(3)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Continue to Confirmation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="step-3" className="space-y-6">
          {/* Step 3: Confirm & Pay */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
                <CardDescription>Review your payment details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedPaymentDetails.map((payment) => (
                    <div
                      key={payment.id}
                      className="flex items-center justify-between py-2"
                    >
                      <div>
                        <p className="font-medium">{payment.student}</p>
                        <p className="text-sm text-muted-foreground">
                          {payment.feeType}
                        </p>
                      </div>
                      <p className="font-semibold">${payment.amount}</p>
                    </div>
                  ))}
                  <hr className="my-4" />
                  <div className="flex items-center justify-between font-semibold text-lg">
                    <span>Total Amount</span>
                    <span>${totalAmount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>
                  Enter your payment information
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedPaymentMethod === 'credit-card' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardholder">Cardholder Name</Label>
                      <Input id="cardholder" placeholder="Robert Davis" />
                    </div>
                  </div>
                )}

                {selectedPaymentMethod === 'bank-transfer' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="bank">Select Bank</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose your bank" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="chase">Chase Bank</SelectItem>
                          <SelectItem value="wells-fargo">
                            Wells Fargo
                          </SelectItem>
                          <SelectItem value="bank-of-america">
                            Bank of America
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {selectedPaymentMethod === 'mobile-money' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="provider">Mobile Money Provider</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mpesa">M-Pesa</SelectItem>
                          <SelectItem value="airtel">Airtel Money</SelectItem>
                          <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <div>
                  <h4 className="font-semibold text-green-800">
                    Secure Payment
                  </h4>
                  <p className="text-sm text-green-700">
                    Your payment information is encrypted and secure. We never
                    store your payment details.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setCurrentStep(2)}>
              Back to Payment Method
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              Complete Payment - ${totalAmount}
              <Shield className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
