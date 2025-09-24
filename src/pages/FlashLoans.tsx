import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Zap, TrendingUp, DollarSign, Clock } from 'lucide-react';
import Layout from '@/components/Layout';

export default function FlashLoans() {
  const [loanAmount, setLoanAmount] = useState('');
  const [strategy, setStrategy] = useState('');

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="hero-gradient rounded-xl p-6 border border-border/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Flash Loans
              </h1>
              <p className="text-muted-foreground mt-2">
                Instant loans for arbitrage and advanced trading strategies
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Badge variant="secondary">
                0.1% Fee
              </Badge>
              <Badge variant="outline">
                Instant Settlement
              </Badge>
            </div>
          </div>
        </div>

        {/* Flash Loan Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="trading-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Create Flash Loan</span>
              </CardTitle>
              <CardDescription>Configure your flash loan parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Loan Amount (SOL)</Label>
                <Input
                  placeholder="Enter amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
              </div>

              <div>
                <Label>Strategy</Label>
                <Input
                  placeholder="Arbitrage strategy"
                  value={strategy}
                  onChange={(e) => setStrategy(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Loan Amount:</span>
                  <span>{loanAmount || '0'} SOL</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Fee (0.1%):</span>
                  <span>{loanAmount ? (parseFloat(loanAmount) * 0.001).toFixed(6) : '0'} SOL</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Repayment:</span>
                  <span>{loanAmount ? (parseFloat(loanAmount) * 1.001).toFixed(6) : '0'} SOL</span>
                </div>
              </div>

              <Button className="trading-button-primary w-full">
                <Zap className="mr-2 h-4 w-4" />
                Execute Flash Loan
              </Button>
            </CardContent>
          </Card>

          <Card className="trading-card">
            <CardHeader>
              <CardTitle>Flash Loan Stats</CardTitle>
              <CardDescription>Platform flash loan metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="text-2xl font-bold text-primary">$2.1M</div>
                  <div className="text-sm text-muted-foreground">24h Volume</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-success/10 border border-success/20">
                  <div className="text-2xl font-bold text-success">156</div>
                  <div className="text-sm text-muted-foreground">Active Loans</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <div className="text-2xl font-bold text-accent">0.1%</div>
                  <div className="text-sm text-muted-foreground">Fee Rate</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-warning/10 border border-warning/20">
                  <div className="text-2xl font-bold text-warning">99.9%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Loans */}
        <Card className="trading-card">
          <CardHeader>
            <CardTitle>Active Flash Loans</CardTitle>
            <CardDescription>Your current flash loan positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <Clock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No active flash loans</h3>
              <p className="text-muted-foreground">
                Create your first flash loan to get started
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}