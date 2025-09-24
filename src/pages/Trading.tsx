import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Zap,
  Target,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import Layout from '@/components/Layout';

// Mock data for trading pairs
const mockTokenPairs = [
  { pair: 'MRX/SOL', price: '0.000156', change: 23.4, volume: '$1.2M' },
  { pair: 'PUMP/SOL', price: '0.007849', change: -5.2, volume: '$890K' },
  { pair: 'DEGEN/SOL', price: '0.001234', change: 67.8, volume: '$2.3M' },
  { pair: 'MOON/SOL', price: '0.000987', change: 12.1, volume: '$567K' },
  { pair: 'PEPE/SOL', price: '0.002345', change: -8.9, volume: '$456K' },
];

// Mock order book data
const mockOrderBook = {
  asks: [
    { price: 0.000158, amount: 125000, total: '19.75' },
    { price: 0.000157, amount: 230000, total: '36.11' },
    { price: 0.000156, amount: 450000, total: '70.20' },
  ],
  bids: [
    { price: 0.000155, amount: 180000, total: '27.90' },
    { price: 0.000154, amount: 320000, total: '49.28' },
    { price: 0.000153, amount: 275000, total: '42.08' },
  ]
};

export default function Trading() {
  const [selectedPair, setSelectedPair] = useState('MRX/SOL');
  const [orderType, setOrderType] = useState('market');
  const [leverage, setLeverage] = useState(1);
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="hero-gradient rounded-xl p-6 border border-border/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Advanced Trading
              </h1>
              <p className="text-muted-foreground mt-2">
                Professional trading tools with leverage up to 50x
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Badge variant="secondary">
                Real-time Data
              </Badge>
              <Badge variant="outline">
                0.1% Trading Fee
              </Badge>
            </div>
          </div>
        </div>

        {/* Trading Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Market Pairs */}
          <Card className="trading-card">
            <CardHeader>
              <CardTitle className="text-lg">Markets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {mockTokenPairs.map((token, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedPair === token.pair 
                        ? 'bg-primary/20 border border-primary/30' 
                        : 'bg-background/50 hover:bg-background/70 border border-border/30'
                    }`}
                    onClick={() => setSelectedPair(token.pair)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{token.pair}</div>
                        <div className="text-xs text-muted-foreground">${token.price}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs flex items-center ${
                          token.change > 0 ? 'text-success' : 'text-destructive'
                        }`}>
                          {token.change > 0 ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                          {token.change > 0 ? '+' : ''}{token.change}%
                        </div>
                        <div className="text-xs text-muted-foreground">{token.volume}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chart Area */}
          <Card className="trading-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>{selectedPair} Chart</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 flex items-center justify-center bg-background/30 rounded-lg border border-border/30">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">TradingView Chart Integration</h3>
                  <p className="text-muted-foreground">
                    Real-time candlestick charts with technical indicators
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trading Panel */}
          <Card className="trading-card">
            <CardHeader>
              <CardTitle>Place Order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Order Type */}
                <div>
                  <Label>Order Type</Label>
                  <Tabs value={orderType} onValueChange={setOrderType} className="mt-2">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="market">Market</TabsTrigger>
                      <TabsTrigger value="limit">Limit</TabsTrigger>
                    </TabsList>
                    <TabsList className="grid w-full grid-cols-2 mt-2">
                      <TabsTrigger value="stop">Stop Loss</TabsTrigger>
                      <TabsTrigger value="take">Take Profit</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Leverage */}
                <div>
                  <Label>Leverage: {leverage}x</Label>
                  <div className="flex space-x-1 mt-2">
                    {[1, 5, 10, 25, 50].map((lev) => (
                      <Button
                        key={lev}
                        variant={leverage === lev ? "default" : "outline"}
                        size="sm"
                        onClick={() => setLeverage(lev)}
                        className="flex-1"
                      >
                        {lev}x
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Price (for limit orders) */}
                {orderType === 'limit' && (
                  <div>
                    <Label>Price</Label>
                    <Input
                      placeholder="0.000156"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                )}

                {/* Amount */}
                <div>
                  <Label>Amount (SOL)</Label>
                  <Input
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <div className="flex space-x-1 mt-2">
                    {['25%', '50%', '75%', '100%'].map((percent) => (
                      <Button
                        key={percent}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setAmount(percent)}
                      >
                        {percent}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Order Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <Button className="trading-button-success">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    BUY
                  </Button>
                  <Button className="trading-button-danger">
                    <TrendingDown className="mr-2 h-4 w-4" />
                    SELL
                  </Button>
                </div>

                {/* Flash Loan Button */}
                <Button variant="outline" className="w-full">
                  <Zap className="mr-2 h-4 w-4" />
                  Use Flash Loan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Book & Trade History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Order Book */}
          <Card className="trading-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Order Book</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Asks */}
                <div>
                  <h4 className="text-sm font-medium text-destructive mb-2">Asks (Sell Orders)</h4>
                  <div className="space-y-1">
                    {mockOrderBook.asks.reverse().map((ask, index) => (
                      <div key={index} className="grid grid-cols-3 gap-2 text-xs p-1 hover:bg-destructive/10 rounded">
                        <span className="text-destructive">{ask.price.toFixed(6)}</span>
                        <span className="text-right">{ask.amount.toLocaleString()}</span>
                        <span className="text-right text-muted-foreground">{ask.total}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Current Price */}
                <div className="text-center py-2 bg-primary/10 rounded border border-primary/30">
                  <span className="text-lg font-bold text-primary">0.000156 SOL</span>
                </div>

                {/* Bids */}
                <div>
                  <h4 className="text-sm font-medium text-success mb-2">Bids (Buy Orders)</h4>
                  <div className="space-y-1">
                    {mockOrderBook.bids.map((bid, index) => (
                      <div key={index} className="grid grid-cols-3 gap-2 text-xs p-1 hover:bg-success/10 rounded">
                        <span className="text-success">{bid.price.toFixed(6)}</span>
                        <span className="text-right">{bid.amount.toLocaleString()}</span>
                        <span className="text-right text-muted-foreground">{bid.total}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trade History */}
          <Card className="trading-card">
            <CardHeader>
              <CardTitle>Recent Trades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {Array.from({ length: 10 }, (_, i) => {
                  const isBuy = Math.random() > 0.5;
                  const price = 0.000156 + (Math.random() - 0.5) * 0.000010;
                  const amount = Math.floor(Math.random() * 1000000) + 100000;
                  return (
                    <div key={i} className="grid grid-cols-3 gap-2 text-xs p-2 hover:bg-background/50 rounded">
                      <span className={isBuy ? 'text-success' : 'text-destructive'}>
                        {price.toFixed(6)}
                      </span>
                      <span className="text-right">{amount.toLocaleString()}</span>
                      <span className="text-right text-muted-foreground">
                        {new Date().toLocaleTimeString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Open Orders */}
        <Card className="trading-card">
          <CardHeader>
            <CardTitle>Open Orders</CardTitle>
            <CardDescription>Your active trading orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <Target className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No open orders</h3>
              <p className="text-muted-foreground">
                Place your first order to start trading
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}